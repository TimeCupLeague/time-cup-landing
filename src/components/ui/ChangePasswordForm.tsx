import React, { useState, useEffect, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'

interface ChangePasswordFormProps {
  supabaseUrl: string
  supabaseAnonKey: string
}

export function ChangePasswordForm({ supabaseUrl, supabaseAnonKey }: ChangePasswordFormProps) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null)

  // Verificar que las credenciales de Supabase estén configuradas
  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      <div className="max-w-md mx-auto bg-white/5 rounded-xl p-8 border border-red-500/20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Error de Configuración</h2>
          <p className="text-red-300">
            Las credenciales de Supabase no están configuradas. Por favor, contacta al administrador.
          </p>
        </div>
      </div>
    )
  }

  const supabase = useMemo(() => createClient(supabaseUrl, supabaseAnonKey), [supabaseUrl, supabaseAnonKey])

  useEffect(() => {
    // Verificar si hay un token de recuperación en la URL
    const checkRecoveryToken = async () => {
      // Verificar que estamos en el cliente
      if (typeof window === 'undefined') {
        return
      }

      try {
        // Supabase maneja automáticamente el token del hash fragment
        // Verificamos si hay una sesión válida
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession()

        if (sessionError) {
          setError('Error al verificar el token. Por favor, usa el enlace del email.')
          setIsValidToken(false)
          return
        }

        // Si hay una sesión, el token es válido
        if (session) {
          setIsValidToken(true)
          // Limpiar el hash de la URL para seguridad
          window.history.replaceState(null, '', window.location.pathname)
        } else {
          // Verificar si hay un token en el hash fragment
          const hashParams = new URLSearchParams(window.location.hash.substring(1))
          const accessToken = hashParams.get('access_token')
          const type = hashParams.get('type')

          if (accessToken && type === 'recovery') {
            // Intentar establecer la sesión con el token
            const { error: exchangeError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: '', // No necesario para recovery
            })

            if (exchangeError) {
              setError(
                'El token ha expirado o no es válido. Por favor, solicita un nuevo enlace de recuperación.',
              )
              setIsValidToken(false)
            } else {
              setIsValidToken(true)
              // Limpiar el hash de la URL
              window.history.replaceState(null, '', window.location.pathname)
            }
          } else {
            setError('Token de recuperación no válido o faltante. Por favor, usa el enlace del email.')
            setIsValidToken(false)
          }
        }
      } catch {
        setError('Error al verificar el token. Por favor, intenta de nuevo.')
        setIsValidToken(false)
      }
    }

    checkRecoveryToken()
  }, [supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!isValidToken) {
      setError('Token de recuperación no válido.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setLoading(true)

    try {
      // Verificar que todavía tenemos una sesión válida
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession()

      if (sessionError || !session) {
        throw new Error('La sesión ha expirado. Por favor, solicita un nuevo enlace de recuperación.')
      }

      // Actualizar la contraseña
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      })

      if (updateError) {
        throw updateError
      }

      // Cerrar la sesión después de cambiar la contraseña
      await supabase.auth.signOut()

      setSuccess(true)
      setPassword('')
      setConfirmPassword('')
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error al cambiar la contraseña. El token puede haber expirado.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto bg-white/5 rounded-xl p-8 border border-green-500/20">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">¡Contraseña cambiada!</h2>
          <p className="text-gray-300 mb-6">
            Tu contraseña ha sido actualizada correctamente. Ya puedes iniciar sesión con tu nueva contraseña.
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Volver al inicio
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white/5 rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Cambiar Contraseña</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Nueva Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Mínimo 6 caracteres"
            required
            disabled={loading || isValidToken === false}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Repite la contraseña"
            required
            disabled={loading || isValidToken === false}
          />
        </div>

        <button
          type="submit"
          disabled={loading || isValidToken === false}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          {loading ? 'Cambiando contraseña...' : 'Cambiar Contraseña'}
        </button>
      </form>
    </div>
  )
}
