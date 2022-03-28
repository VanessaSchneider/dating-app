class Like < ApplicationRecord
  belongs_to :user
  has_one :match

  def match_check
    liked_person = self.liked_person_id 
    matched_like = Like.where(user_id: liked_person, liked_person_id: self.user_id)
    if matched_like.length > 0
          Match.create(like_id: self.id)
          puts "match created"
        else return "this is not a match"
    end
  end

 

end
