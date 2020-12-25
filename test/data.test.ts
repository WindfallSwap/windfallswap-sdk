import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    // const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F') // DAI
    const token = await Fetcher.fetchTokenData(ChainId.ROPSTEN, '0x31f42841c2db5173425b5223809cf3a38fede360') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    // const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A') // DGD
    const token = await Fetcher.fetchTokenData(ChainId.ROPSTEN, '0x5cf9904f7f24b75765d1f0c27b0ca04b8da3f8bc') // DGD
    expect(token.decimals).toEqual(9)
  })

  it('Pair', async () => {
    // const token = new Token(ChainId.RINKEBY, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18) // DAI
    // const pair = await Fetcher.fetchPairData(WETH[ChainId.RINKEBY], token)
    const token = new Token(ChainId.ROPSTEN, '0x31f42841c2db5173425b5223809cf3a38fede360', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.ROPSTEN], token)
    console.log('-- liquidityToken : ', pair.liquidityToken.address)
    expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449')
  })
})
