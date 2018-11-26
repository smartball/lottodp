import { withMasterDrawingDate } from 'repositories/models/drawingDate'
import { pipe } from 'utils/pipe'
import { withConstructor } from 'utils/withConstructor'

const withDrawingScope = (props) => ({
  category: 'chinaafternoon',
  ...props,
})

const drawingDate = () => pipe(
  withConstructor(drawingDate),
  withMasterDrawingDate,
  withDrawingScope,
)({})
export default drawingDate
