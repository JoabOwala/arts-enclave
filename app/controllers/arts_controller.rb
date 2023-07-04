class ArtsController < ApplicationController

    #GET /arts
    def index
        arts = Art.all
        render json: arts
    end

    #GET /arts/:id
    def show
        art = Art.find(params[:id])
        render json: art
    end

    #POST /arts
    def create
        art = Art.new(art_params)
        if art.save
            render json: art, status: :created
        else
            render json: { errors: art.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #PATCH /arts/:id
    def update
        art = Art.find(params[:id])
        if art.update(art_params)
            render json: art
        else
            render json: { errors: art.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #DELETE /arts/:id
    def destroy
        art = Art.find(params[:id])
        art.destroy
        head :no_content
    end

    private

    def art_params
        params.require(:art).permit(:title, :description, :image_url, :medium, :year, :price, :collector_id, :artist_id)
    end
end
