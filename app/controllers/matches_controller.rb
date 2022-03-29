class MatchesController < ApplicationController

    def index
        matches = Match.all
        render json: matches, status: :ok
    end

    def show
        match = Match.find(params[:id])
        render json: match, status: :ok
    end

    def destroy
        match = Match.find(params[:id])
        match.destroy
        head :no_content
    end

    def get_matches
        matches = Match.all
        # me = User.find_by(id:1)
        me = User.find_by(id:session[:user_id])
        filtered_matches = matches.filter{|m| m.like.user_id == me.id || m.like.liked_person_id == me.id }
        # matches.get_match_data
        render json: filtered_matches, status: :ok
    end

end
