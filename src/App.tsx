import { AppContainer} from "./styles"
import { Column } from "./Column"
import { Card } from "./Card"


export const App = () => {
  return (
    <AppContainer>
      <Column text='Title'>
        <Card text="Card content"></Card>
      </Column>
      Columns will go here
    </AppContainer>
  )
}
