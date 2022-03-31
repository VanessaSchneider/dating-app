class Conversation < ApplicationRecord
    has_many :messages
    has_many :chats
    has_many :matches, through: :chats
    has_many :users, through: :chats
end
