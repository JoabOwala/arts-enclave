class ArtworksController < ApplicationController
    def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork, status: :created
    else
      render json: { errors: artwork.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def user_artworks
    user = User.find(params[:user_id])
    artworks = user.artworks
    render json: artworks
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist, :description, :year, :user_id)
  end
end
