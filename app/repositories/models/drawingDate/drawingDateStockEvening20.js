import { withMasterDrawingDate } from 'repositories/models/drawingDate'
import { pipe } from 'utils/pipe'
import { withConstructor } from 'utils/withConstructor'

const withDrawingDateScope = (props) => ({
  category: 'stockevening20',
  roundLabel: 'คู่',
  isGroup: true,
  nRound: 20,
  getNextDrawingDate() {

  },
  getNextSwitchOn() {
  },
  getNextSwitchOff() {
  },
  forceNext() {
  },
  ...props,
})

const drawingDate = () => pipe(
  withConstructor(drawingDate),
  withMasterDrawingDate,
  withDrawingDateScope,
)({})
export default drawingDate
