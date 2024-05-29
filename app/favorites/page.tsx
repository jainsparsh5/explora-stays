import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();
  if (!currentUser) {
    return (
      <EmptyState
        title="Please login"
        subtitle="Login to view your favorites"
      />
    );
  }
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="You have not added any favorites yet"
      />
    );
  }
  return (
    <FavoritesClient 
        listings={listings}
        currentUser={currentUser}
    />
  )
};

export default FavoritesPage;
