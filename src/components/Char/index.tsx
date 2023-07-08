import * as C from './styles';
import { CharSides } from '../../types/CharSides'

type Props = {
    x: number;
    y: number;
    side: CharSides;
    name: string;
}

export const Char = ({x, y, side, name}: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return(
        <C.Container left={x * size} top={y *size} size={size} sidePos={sides[side] ?? 0}>
            <C.NameBox>{name}</C.NameBox>
        </C.Container>
    );
};