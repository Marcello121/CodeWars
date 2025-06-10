function maskify (numeroCartao){
    let cardI = numeroCartao.slice (0, -4);
    let cardF = numeroCartao.slice(-4);

    let cardAlt = '#'.repeat(cardI.length) + cardF;
    console.log(cardAlt)

}

maskify('123454534543543')