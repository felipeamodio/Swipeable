import { useRef } from "react"
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/card";
import ReanimatedSwipeable, { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";
import { Option } from "../../components/option";

export function Home() {
  const openSwipeableRef = useRef<SwipeableMethods | null>(null);

  function onSwipeableWillOpen(direction: "left" | "right", current: SwipeableMethods | null){
    if(direction === "right"){
      console.log("DELETE")
    }

    if(openSwipeableRef.current){ //check pra sempre fechar o que está aberto se for abrir um novo
      openSwipeableRef.current.close()
    }

    openSwipeableRef.current = current
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Swipeable</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let current: SwipeableMethods | null = null

          return (
          <ReanimatedSwipeable
            containerStyle={styles.swipeableContainer}
            ref={(swipeable) => (current = swipeable)}
            // overshootRight={false} //deixa um limite na hora de fazer o swipeable
            overshootFriction={250} //faz um efeito de mola
            friction={1.3} //quanto a interação visual vai ser atrasada em comparação na hora de arrastar, é como se ficasse mais pesado
            // rightThreshold={50} //define a distancia da borda pra abir a opção
            onSwipeableWillOpen={(direction) => onSwipeableWillOpen(direction, current)}
            renderRightActions={() => (
              <View style={styles.rightActions}>
                <Option icon="open-in-new" backgroundColor="#00B960" />
                <Option icon="close" backgroundColor="#3E68D7" />
              </View>
            )}
            renderLeftActions={() => (
              <View style={styles.leftActions}>
                <Option icon="delete" backgroundColor="#E83D55" />
              </View>
            )}
          >
            <Card name={item.name} email={item.email} />
          </ReanimatedSwipeable>
        )}}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
