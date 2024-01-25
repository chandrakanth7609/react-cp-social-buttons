const Button = props => {
  const {buttonText ,className} = props;
  return <button className = {`button ${className}`}>{buttonText}</button>
}

const element = (
  <div className = "main-container">
      <h1 className="heading">Social Buttons</h1>
      <div className = "button-container">
          <Button buttonText="Like"  className ="like" />
          <Button buttonText="comment"  className ="comment" />
          <Button buttonText="Share"  className ="share" />
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
