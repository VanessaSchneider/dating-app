class Match < ApplicationRecord
  belongs_to :like

end

#do fetch
  #Return
  # : {
  #   match id: 1
  #   message:
  #   current_user_id: 2
  #   matched_person: {
  #     user_id:
  #     image:
  #     bio:
  #   }
  # }