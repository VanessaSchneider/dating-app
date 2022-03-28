class MatchSerializer < ActiveModel::Serializer
  attributes :id, :like_id, :message

  belongs_to :like
end
