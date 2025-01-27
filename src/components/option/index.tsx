import { TouchableOpacity, TouchableOpacityProps, ColorValue } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap //pegando a tipagem dos ícones dessa lib
    backgroundColor: ColorValue //ColorValue ter a flexibilidade de colocar uma cor de fundo diferente para cada opção
}

export function Option({ icon, backgroundColor, ...rest }: Props){
    return(
        <TouchableOpacity style={[styles.container, , { backgroundColor }]} activeOpacity={0.7}>
            <MaterialIcons name={icon} size={24} color="#FFFFFF" />
        </TouchableOpacity>
    )
}