import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import React from 'react';

function App() {
  return (
    <RecipeDetailWrapper />
  );
}
const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <Helmet>
        <title>{recipe.title}</title>
        {/* <meta property="og:title" content={recipe.title} /> */}
        {/* <meta property="og:description" content={recipe.description} /> */}
        <meta property="og:image" content={recipe.imageUrl} />
        {/* <meta property="og:url" content={`https://yourwebsite.com/app?path=shopRecipeDetail&val=${recipe.id}`} /> */}
        {/* <meta property="og:type" content="website" /> */}
      </Helmet>
      {/* <h1>{recipe.title}</h1> */}
      {/* <p>{recipe.description}</p> */}
      {/* <img src={recipe.imageUrl} alt={recipe.title} /> */}
    </div>
  );
};
const RecipeDetailWrapper = (props) => {
  const query = new URLSearchParams(props.location.search);
  const id = query.get('val');

  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    // Fetch recipe data based on the id from the query params
    const fetchRecipe = async (id) => {
      const response = await fetch(`http://ec2-54-206-21-150.ap-southeast-2.compute.amazonaws.com/getRecipeById/${"66687619b4c7a821d55c68f9"}`); // Replace with your actual API endpoint
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe("66687619b4c7a821d55c68f9");
  }, ["66687619b4c7a821d55c68f9"]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return <RecipeDetail recipe={recipe} />;
};
export default App;
