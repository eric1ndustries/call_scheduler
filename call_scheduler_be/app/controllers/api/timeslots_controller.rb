class Api::TimeslotsController < Api::ApplicationController
# GET /api/timeslots
class Api::TimeslotsController < ApplicationController
  def index
    timeslots = Timeslot.all

    # Filter by date if provided
    if params[:date].present?
      date = Date.parse(params[:date]) rescue nil
      if date
        timeslots = timeslots.where('dateTime::date = ?', date)
      else
        return render json: { error: 'Invalid date format' }, status: :unprocessable_entity
      end
    end

    # Filter by coach_id if provided
    if params[:coach_id].present?
      coach_id = params[:coach_id].to_i
      timeslots = timeslots.where(coach_id: coach_id)
    end

    if timeslots.empty?
      # Return a 404 status with a message if no timeslots found
      render json: { error: "No timeslots available for this date" }, status: :not_found
    else
      render json: timeslots
    end
  end
end

  # Return all timeslots or filtered timeslots
  render json: timeslots
end

  # GET /api/timeslots/:id
  def show
    # Find timeslot by coach_id and id, but allow for partial matches or other parameters
    timeslot = Timeslot.where(coach_id: params[:coach_id], id: params[:id]).first
  
    if timeslot
      # Apply filters for status and start if provided
      if params[:status].present?
        timeslot = timeslot.where(status: params[:status])
      end
  
      if params[:start].present?
        start_date = Date.parse(params[:start]) rescue nil
        if start_date
          timeslot = timeslot.where("start >= ?", start_date.beginning_of_day)
        else
          return render json: { error: 'Invalid start date format' }, status: :unprocessable_entity
        end
      end
  
      render json: timeslot
    else
      render json: { error: 'Timeslot not found' }, status: :not_found
    end
  end

  # POST /api/timeslots
  def create
    timeslot_data = params[:timeslots]
    
    # Handle both single and batch creation
    timeslot_data = [timeslot_data] if timeslot_data.is_a?(ActionController::Parameters) || timeslot_data.is_a?(Hash)
  
    timeslot_params_array = timeslot_data.map do |slot|
      slot.permit(:start, :end, :coach_id, :status)
    end
  
    timeslots = Timeslot.create!(timeslot_params_array)
  
    render json: timeslots, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  # PATCH/PUT /api/timeslots/:id
  def update
    timeslot = Timeslot.find_by(id: params[:id])
    
    if timeslot
      if timeslot.update(timeslot_params)
        render json: timeslot, status: :ok
      else
        render json: { errors: timeslot.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Timeslot not found' }, status: :not_found
    end
  end

  private

  def timeslot_params
    params.require(:timeslot).permit(:dateTime, :coachId, :studentId, :status, :notes, :rating)
  end
end
