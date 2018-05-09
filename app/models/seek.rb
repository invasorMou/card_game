class Seek
  def self.create(player)
    if opponent = REDIS.spop("seeks")
      Game.start(player.id,opponent)
    else
      REDIS.sadd("seeks", player.id)
    end
  end

  def self.remove(player)
    REDIS.srem("seeks", player)
  end

  def self.clear_all
    REDIS.del("seeks")
  end
end
