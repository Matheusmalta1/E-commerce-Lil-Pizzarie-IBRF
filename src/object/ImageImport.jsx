import f01 from '../img/LasanhaBolonhesaSadia.png';
import f02 from '../img/lasanhaPeitodePeru600Sadia.png';
import f03 from '../img/almondegasdeCarne.png';
import f04 from '../img/MacandCheese.png';
import f05 from '../img/pizza4QueijosSadia.png';
import f06 from '../img/Bigchickenqueijo.png';
import f07 from '../img/HamburguerPerdigao.png';
import f08 from '../img/Linguiça toscana com pimenta biquinho.png';
import f09 from '../img/Linguiça toscana com queijo coalho.png';

const imagens = [
    { 
    id: 'f1',
    src: f01,
    name: 'Lasanha Bolonhesa', 
    price: 15.99,
    size: 'Quantidade: 500g',
    info: 'Porção 300g (½ unidade)',
    at: 'Valor energético:',
    av: '389 kcal',
    bt: 'Carboidratos:',
    bv: '36g',
    ct: 'Proteínas:',
    cv: '24g',
    dt: 'Gorduras totais:',
    dv: '17g',
    et: 'Gorduras Saturadas:',
    ev: '7,1g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '3g',
    ht: 'Sódio:',
    hv: '774mg '
    },
    {
    id: 'f2',
    src: f02,
    name: 'Lasanha Peito de Peru', 
    price: 14.99,
    size: 'Quantidade: 500g',
    info: 'Porção 300g (1/2 unidade)',
    at: 'Valor energético:',
    av: '461 kcal',
    bt: 'Carboidratos:',
    bv: '40g',
    ct: 'Proteínas:',
    cv: '15g',
    dt: 'Gorduras totais:',
    dv: '27g',
    et: 'Gorduras Saturadas:',
    ev: '12g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '3,8g',
    ht: 'Sódio:',
    hv: '786mg '
    },
    {
    id: 'f3',
    src: f03,
    name: 'Almondegas de Carne', 
    price: 11.99,
    size: 'Quantidade: 500g',
    info: 'Porção de 80g (3 unidades)',
    at: 'Valor energético:',
    av: '596 kcal',
    bt: 'Carboidratos:',
    bv: '8g',
    ct: 'Proteínas:',
    cv: '9,6g',
    dt: 'Gorduras totais:',
    dv: '7,9g',
    et: 'Gorduras Saturadas:',
    ev: '3,5g',
    ft: 'Gorduras trans:',
    fv: '0,3g',
    gt: 'Fibra alimentar:',
    gv: '17g',
    ht: 'Sódio:',
    hv: '598mg '
    },
    {
    id: 'f4',
    src: f04,
    name: 'Mac and Cheese', 
    price: 9.99,
    size: 'Quantidade: 500g',
    info: 'Porção de 350g (1 unidade)',
    at: 'Valor energético:',
    av: '720 kcal',
    bt: 'Carboidratos:',
    bv: '92g,',
    ct: 'Proteínas:',
    cv: '18g',
    dt: 'Gorduras totais:',
    dv: '29g',
    et: 'Gorduras Saturadas:',
    ev: '18g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '1g',
    ht: 'Sódio:',
    hv: '1198mg '
    },
    {
    id: 'f5',
    src: f05,
    name: 'Pizza 4 Queijos', 
    price: 10.99,
    size: 'Quantidade: 500g',
    info: 'Porção 300g (½ unidade)',
    at: 'Valor energético:',
    av: '389 kcal',
    bt: 'Carboidratos:',
    bv: '36g',
    ct: 'Proteínas:',
    cv: '24g',
    dt: 'Gorduras totais:',
    dv: '17g',
    et: 'Gorduras Saturadas:',
    ev: '7,1g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '3g',
    ht: 'Sódio:',
    hv: '774mg '
    },
    {
    id: 'f6',
    src: f06,
    name: 'Big Chicken Queijo', 
    price: 9.99,
    size: 'Quantidade: 500g',
    info: 'Porção 300g (½ unidade)',
    at: 'Valor energético:',
    av: '283 kcal',
    bt: 'Carboidratos:',
    bv: '16g',
    ct: 'Proteínas:',
    cv: '20g',
    dt: 'Gorduras totais:',
    dv: '4g',
    et: 'Gorduras Saturadas:',
    ev: '1,1g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '2g',
    ht: 'Sódio:',
    hv: '920mg '
    },
    {
    id: 'f7',
    src: f07,
    name: 'Hamburguer', 
    price: 18.99,
    size: 'Quantidade: 500g',
    info: 'Porção 300g (½ unidade)',
    at: 'Valor energético:',
    av: '283 kcal',
    bt: 'Carboidratos:',
    bv: '16g',
    ct: 'Proteínas:',
    cv: '20g',
    dt: 'Gorduras totais:',
    dv: '4g',
    et: 'Gorduras Saturadas:',
    ev: '1,1g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '2g',
    ht: 'Sódio:',
    hv: '920mg '
    },
    {
    id: 'f8',
    src: f08,
    name: 'Linguiça Toscana com pimenta biquinho', 
    price: 11.99,
    size: 'Quantidade: 500g',
    info: 'Porção 50g (1/2 unidades)',
    at: 'Valor energético:',
    av: '117 kcal',
    bt: 'Carboidratos:',
    bv: '1,6g',
    ct: 'Proteínas:',
    cv: '7,5g',
    dt: 'Gorduras totais:',
    dv: '2,7g',
    et: 'Gorduras Saturadas:',
    ev: '2,0g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '2g',
    ht: 'Sódio:',
    hv: '440mg '
    },
    {
    id: 'f9',
    src: f09,
    name: 'Linguiça Toscana com queijo coalho', 
    price: 10.99,
    size: 'Quantidade: 500g',
    info: 'Porção 50g (1/2 unidades)',
    at: 'Valor energético:',
    av: '117 kcal',
    bt: 'Carboidratos:',
    bv: '1,6g',
    ct: 'Proteínas:',
    cv: '7,5g',
    dt: 'Gorduras totais:',
    dv: '2,7g',
    et: 'Gorduras Saturadas:',
    ev: '2,0g',
    ft: 'Gorduras trans:',
    fv: '0g',
    gt: 'Fibra alimentar:',
    gv: '2g',
    ht: 'Sódio:',
    hv: '440mg '
    },
];

export default imagens;