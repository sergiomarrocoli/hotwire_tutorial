class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include CableReady::Broadcaster
  before_action :turbo_frame_request_variant

  private

  def turbo_frame_request_variant
    request.variant = :turbo_frame if turbo_frame_request?
  end
end
