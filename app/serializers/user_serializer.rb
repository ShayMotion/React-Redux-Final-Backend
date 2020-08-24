class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :hometown
end
