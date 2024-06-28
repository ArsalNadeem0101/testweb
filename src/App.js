import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <RecipePage />
      </Helmet>
    </div>
  );
}
const RecipePage = ({ recipe }) => {
  return (
    <div>
      <title>{recipe.title}</title>
      <meta name="description" content={"recipe.description"} />
      <meta property="og:title" content={recipe.title} />
      <meta property="og:description" content={recipe.description} />
      <meta property="og:image" content={"https://sharecipe.s3.amazonaws.com/17173.png"} />
      <meta property="og:url" content={`https://example.com/recipes/${recipe.id}`} />
      <meta property="og:type" content="article" />
      <h1>{recipe.title}</h1>
      <img src={"https://sharecipe.s3.amazonaws.com/17173.png"} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div >
  );
};
export default App;
