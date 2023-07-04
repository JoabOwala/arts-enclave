class CollectorsController < ApplicationController

    #GET /collectors
    def index
        collectors = Collector.all
        render json: collectors
    end

    #GET /collectors/:id
    def show
        collector = Collector.find(params[:id])
        render json: collector
    end

    #POST /collectors
    def create
        collector = Collector.new(collector_params)
        if collector.save
            render json: collector, status: :created
        else
            render json: { errors: collector.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #PATCH /collectors/:id
    def update
        collector = Collector.find(params[:id])
        if collector.update(collector_params)
            render json: collector
        else
            render json: { errors: collector.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #DELETE /collectors/:id
    def destroy
        collector = Collector.find(params[:id])
        collector.destroy
        head :no_content
    end

    private

    def collector_params
        params.require(:collector).permit(:name, :email)
    end
end
