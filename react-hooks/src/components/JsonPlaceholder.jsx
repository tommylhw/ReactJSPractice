const JsonPlaceholder = ({ getResourceType, getItems }) => {
  return (
    <>
      <h1>JsonPlaceholder</h1>
      <div>
        <button onClick={() => {getResourceType('posts')}}>Posts</button>
        <button onClick={() => {getResourceType('users')}}>Users</button>
        <button onClick={() => {getResourceType('comments')}}>Comments</button>
      </div>
      {getItems.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
    
  )
}

export default JsonPlaceholder;