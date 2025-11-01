import { useCallback, useState } from 'react'
import { leagueStandards } from '../../content/league'

enum State {
  RX,
  INTERMEDIATE,
  SCALED,
}

export function Standards() {
  const [state, setState] = useState<State>(State.RX)

  const renderStandard = useCallback((standard: string | boolean) => {
    if (typeof standard === 'string') {
      return standard
    }
    if (typeof standard === 'boolean') {
      return standard ? (
        <span className="material-symbols-outlined">check</span>
      ) : (
        <span className="material-symbols-outlined">close</span>
      )
    }
    return ''
  }, [])

  const rx = Object.entries(leagueStandards).map(([movement, categoryStandard], index) => {
    return (
      <div key={movement} className={`grid grid-cols-2 gap-4 p-4 ${index % 2 === 0 && 'bg-white/5'}`}>
        <p className="font-semibold text-gray-300">{movement}</p>
        <p className="text-right font-mono text-white">{renderStandard(categoryStandard.rx)}</p>
      </div>
    )
  })
  const intermediate = Object.entries(leagueStandards).map(([movement, categoryStandard], index) => {
    return (
      <div key={movement} className={`grid grid-cols-2 gap-4 p-4 ${index % 2 === 0 && 'bg-white/5'}`}>
        <p className="font-semibold text-gray-300">{movement}</p>
        <p className="text-right font-mono text-white">{renderStandard(categoryStandard.intermediate)}</p>
      </div>
    )
  })
  const scaled = Object.entries(leagueStandards).map(([movement, categoryStandard], index) => {
    return (
      <div key={movement} className={`grid grid-cols-2 gap-4 p-4 ${index % 2 === 0 && 'bg-white/5'}`}>
        <p className="font-semibold text-gray-300">{movement}</p>
        <p className="text-right font-mono text-white">{renderStandard(categoryStandard.scaled)}</p>
      </div>
    )
  })

  const stylesInactive = 'text-gray-400 hover:text-white'
  const stylesactive = 'text-primary-500 border-b-2 border-primary-400'
  const commonStyles = 'flex-1 py-4 text-center font-semibold transition-colors'

  return (
    <>
      <div className="mb-8">
        <div className="flex border-b border-white/10">
          <button
            onClick={() => {
              setState(State.RX)
            }}
            className={`${state == State.RX ? stylesactive : stylesInactive} ${commonStyles}`}>
            Rx
          </button>
          <button
            onClick={() => {
              setState(State.INTERMEDIATE)
            }}
            className={`${state == State.INTERMEDIATE ? stylesactive : stylesInactive} ${commonStyles}`}>
            Intermedio
          </button>
          <button
            onClick={() => {
              setState(State.SCALED)
            }}
            className={`${state == State.SCALED ? stylesactive : stylesInactive} ${commonStyles}`}>
            Escalado
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="divide-y divide-white/10 border border-white/10 rounded-lg">
          {state === State.RX && rx}
          {state === State.INTERMEDIATE && intermediate}
          {state === State.SCALED && scaled}
        </div>
      </div>
    </>
  )
}
