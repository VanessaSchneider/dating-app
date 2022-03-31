class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def show
        message = Message.find(params[:id])
        render json: message, status: :ok
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy
        head :no_content
    end

    def create 
        message = Message.create(params_message)
        render json: message, status: :created
    end

    private
    def params_message
    params.permit(:conversation_id, :message, :user_id)
end



end
