module Api
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      private
      def sign_up_params
        params.permit(:name, :email, :department_id, :grade_id, :role_id, :pc_name, :pc_cpu, :pc_memory, :pc_ssd, :password, :password_confirmation)
      end

      def account_update_params
        params.permit(:name, :email)
      end

    end
  end
end
