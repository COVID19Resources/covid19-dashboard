import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const Counters = ({report, previousReport, isVariation}) => {
  const {casConfirmes, hospitalises, reanimation, deces, gueris} = report || {}
  const details = {
    casConfirmes: 'Nombre cumulé de cas de COVID-19 confirmés par un test positif. <br />Un nouvel indicateur sera bientôt proposé.',
    gueris: 'Nombre cumulé de patients ayant été hospitalisés pour COVID-19 <br />et de retour à domicile en raison de l’amélioration de leur état de santé',
    deces: 'Nombre cumulé de décès de patients hospitalisés pour COVID-19 depuis le 1er mars 2020',
    hospitalises: 'Nombre de patients actuellement hospitalisés pour COVID-19',
    reanimation: ' Nombre de patients actuellement en réanimation ou soins intensifs'
  }

  return (
    <div className='stats'>
      <div className='counters'>
        <Counter isVariation={isVariation} value={gueris} previousValue={previousReport.gueris} label='retours à domicile' details={details.gueris} color='green' />
        <Counter isVariation={isVariation} value={deces} previousValue={previousReport.deces} label='décès à l’hôpital' details={details.deces} color='red' />
        <Counter isVariation={isVariation} value={hospitalises} previousValue={previousReport.hospitalises} label='hospitalisations' details={details.hospitalises} color='darkGrey' />
        <Counter isVariation={isVariation} value={reanimation} previousValue={previousReport.reanimation} label='en réanimation' details={details.reanimation} color='darkerGrey' />
      </div>
      <Counter isVariation={isVariation} value={casConfirmes} previousValue={previousReport.casConfirmes} label='cas confirmés' details={details.casConfirmes} color='orange' />
      <style jsx>{`
        .counters {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  )
}

Counters.defaultProps = {
  report: {},
  previousReport: {},
  isVariation: false
}

Counters.propTypes = {
  report: PropTypes.object,
  previousReport: PropTypes.object,
  isVariation: PropTypes.bool
}

export default Counters
