json.name @party.name
json.guests do
  json.array! @party.guests do |guest|
    json.name guest.name
    json.gifts do 
      json.array! guest.gifts do |gift|
        json.extract! gift, :title, :description
      end
    end
  end
end
