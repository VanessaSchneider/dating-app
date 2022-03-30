class ChatSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :conversation
  has_many :messages
end
