class ConversationsController < ApplicationController
    def index
        conversations = Conversation.all
        render json: conversations, status: :ok
    end

    def show
        conversation = Conversation.find(params[:id])
        render json: message, status: :ok
    end


end
