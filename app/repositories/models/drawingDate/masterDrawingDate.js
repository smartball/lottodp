import { DrawingDates } from 'database/models'

const withMasterDrawingDate = (props) => ({
  isGroup: false,
  nRound: 1,
  category: 'thai',
  current({ rootId }) {
    return DrawingDates.findOne({
      is_active: 1,
      root_id: rootId
    })
  },

  findOne({ rootId }) {
    return DrawingDates.findOne({
      playing_category: this.category,
      root_id: rootId
    })
  },

  find({ rootId }) {
    console.log('FInd root id', rootId);
    return DrawingDates.find({
      playing_category: this.category,
      root_id: rootId,
    })
  },
  ...props
})
export default withMasterDrawingDate
