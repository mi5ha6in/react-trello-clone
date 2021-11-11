import { useDragLayer, userDragLayer } from "react-dnd"
import { Column } from "./Column"
import { CustomDragLayerContainer } from "./styles"
import { useAppState } from "./state/AppStateContext"

const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <Column
        id={draggedItem.id}
        text={draggedItem.text}
      />
    </CustomDragLayerContainer>
  ) : null
}
