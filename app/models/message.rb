class Message < ApplicationRecord
    belongs_to :conversation
    # has_many :chats, through: :conversations
    belongs_to :user
end
