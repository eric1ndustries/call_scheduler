module Api
    class UsersController < ApplicationController
        # GET /api/users
        def index
          users = User.all
        
          # Filter users based on the timeslot date
          if params[:date].present?
            begin
              # Parse the date parameter
              date = Date.parse(params[:date])
        
              # Join the timeslots table and filter users based on the date
              users = users.joins(:timeslots)
                           .where(timeslots: { dateTime: date.beginning_of_day..date.end_of_day })
            rescue ArgumentError
              # Handle invalid date format
              render json: { error: 'Invalid date format' }, status: :unprocessable_entity
              return
            end
          end
    
          render json: users
        end
      
        # GET /api/users/:id
        def show
          user = User.find(params[:id])
          render json: user
        rescue ActiveRecord::RecordNotFound
          render json: { error: 'User not found' }, status: :not_found
        end
      
        # POST /api/users
        def create
          user = User.new(user_params)
      
          if user.save
            render json: user, status: :created
          else
            render json: user.errors, status: :unprocessable_entity
          end
        end
      
        private
      
        def user_params
          params.require(:user).permit(:name, :phone, :role)
        end
    end
end