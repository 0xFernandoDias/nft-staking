import {
	useAddress,
	useContract,
	useContractWrite,
	useMetamask,
} from "@thirdweb-dev/react"
import { useRouter } from "next/router"

const Mint = () => {
	const router = useRouter()
	const address = useAddress()
	const connectWithMetamask = useMetamask()

	// NFT Drop Contract
	const { contract } = useContract("0xbaE62330A4CBb09FDE57c2Dc25f7E05A421424ba")

	const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim")

	async function call() {
		try {
			// next-dev.js?3515:20 TypeError: Cannot read properties of undefined (reading 'call')
			// const data = await claim([1])
			console.info("contract call successs", await data)
		} catch (err) {
			console.error("contract call failure", err)
		}
	}

	return (
		<>
			{!address ? (
				<button onClick={connectWithMetamask}>Connect Wallet</button>
			) : (
				<button
					onClick={(e) => {
						e.preventDefault()
						call()
					}}
				>
					Claim a NFT
				</button>
			)}
		</>
	)
}

export default Mint
