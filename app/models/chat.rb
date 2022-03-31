class Chat < ApplicationRecord
    belongs_to :user
    belongs_to :conversation
    belongs_to :match
    has_many :messages, through: :conversations
end
