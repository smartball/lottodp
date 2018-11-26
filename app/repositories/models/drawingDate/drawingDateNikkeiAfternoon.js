import { withMasterDrawingDate } from 'repositories/models/drawingDate'
import { pipe } from 'utils/pipe'
import { withConstructor } from 'utils/withConstructor'

const withDrawingDateScope = (props) => ({
  category: 'nikkeiafternoon',
  ...props,
})

const drawingDate = () => pipe(
  withConstructor(drawingDate),
  withMasterDrawingDate,
  withDrawingDateScope,
)({})
export default drawingDate
