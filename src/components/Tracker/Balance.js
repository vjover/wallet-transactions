import { useBalance } from 'wagmi'

 
function Balance() {
  const { data, isError, isLoading } = useBalance({
    address: '0xec7b33C3efb7E4eB33c9e5240d1BB08980F48d51',
    
  })

 
  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
  return (
    <div className='title is-2'>
      Balance: {data?.formatted} {data?.symbol}
    
    </div>
  )
}


export default Balance;