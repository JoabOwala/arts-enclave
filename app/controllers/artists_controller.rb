class ArtistsController < ApplicationController

    #GET /artists
    def index
        artists = Artist.all
        render json: artists
    end

    #GET /artists/:id
    def show
        artist = Artist.find(params[:id])
        render json: artist
    end

    #POST /artists
    def create
        artist = Artist.new(artist_params)
        if artist.save
        render json: artist, status: :created
        else
        render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #PATCH /artists/:id
    def update
        artist = Artist.find(params[:id])
        if artist.update(artist_params)
        render json: artist
        else
        render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #DELETE /artists/:id
    def destroy
        artist = Artist.find(params[:id])
        artist.destroy
        head :no_content
    end

    private

    def artist_params
        params.require(:artist).permit(:name, :bio)
    end
end
