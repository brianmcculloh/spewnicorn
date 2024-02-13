export default function getShardAttribute (card, shard, attribute, type = false) {
    let data = "";

    // draw/discard/destroy/combine values
    if (type) {
        // single shard
        if (card.shardUpgrades[type] != undefined) {
            if (card.shardUpgrades[type][attribute] != undefined) {
                data = card.shardUpgrades[type][attribute];
            }
        }
        // overwrite with specific shard values
        if (shard == "frost") {
            if (card.iceShardUpgrades[type] != undefined) {
                if (card.iceShardUpgrades[type][attribute] != undefined) {
                    data = card.iceShardUpgrades[type][attribute];
                }
            }
        }
        if (shard == "flame") {
            if (card.fireShardUpgrades[type] != undefined) {
                if (card.fireShardUpgrades[type][attribute] != undefined) {
                    data = card.fireShardUpgrades[type][attribute];
                }
            }
        }

        // multiple shards
        if (card.shards.length > 1) {
            // start with both shards values
            if (card.bothShardUpgrades[type] != undefined) {
                if (card.bothShardUpgrades[type][attribute] != undefined) {
                    data = card.bothShardUpgrades[type][attribute];
                }
            }
            // overwrite with specific shard values
            if (shard == "frost_2") {
                if (card.iceShardUpgrades[type] != undefined) {
                    if (card.iceShardUpgrades[type][attribute + "_2"] != undefined) {
                        data = card.iceShardUpgrades[type][attribute + "_2"];
                    }
                }
                if (card.iceShardUpgrades[type + "_2"] != undefined) {
                    if (card.iceShardUpgrades[type + "_2"][attribute] != undefined) {
                        data = card.iceShardUpgrades[type + "_2"][attribute];
                    }
                }
            }
            if (shard == "flame_2") {
                if (card.fireShardUpgrades[type] != undefined) {
                    if (card.fireShardUpgrades[type][attribute + "_2"] != undefined) {
                        data = card.fireShardUpgrades[type][attribute + "_2"];
                    }
                }
                if (card.fireShardUpgrades[type + "_2"] != undefined) {
                    if (card.fireShardUpgrades[type + "_2"][attribute] != undefined) {
                        data = card.fireShardUpgrades[type + "_2"][attribute];
                    }
                }
            }
        }

        // standard defaults
    } else {
        // single shard
        if (card.shardUpgrades[attribute] != undefined) {
            data = card.shardUpgrades[attribute];
        }
        // overwrite with specific shard values
        if (shard == "frost") {
            if (card.iceShardUpgrades[attribute] != undefined) {
                data = card.iceShardUpgrades[attribute];
            }
        }
        if (shard == "flame") {
            if (card.fireShardUpgrades[attribute] != undefined) {
                data = card.fireShardUpgrades[attribute];
            }
        }

        // multiple shards
        if (card.shards.length > 1) {
            // start with both shards values
            if (card.bothShardUpgrades != undefined) {
                if (card.bothShardUpgrades[attribute] != undefined) {
                    data = card.bothShardUpgrades[attribute];
                }
            }
            // overwrite with specific shard values
            if (shard == "frost_2") {
                if (card.iceShardUpgrades != undefined) {
                    if (card.iceShardUpgrades[attribute + "_2"] != undefined) {
                        data = card.iceShardUpgrades[attribute + "_2"];
                    }
                }
            }
            if (shard == "flame_2") {
                if (card.fireShardUpgrades != undefined) {
                    if (card.fireShardUpgrades[attribute + "_2"] != undefined) {
                        data = card.fireShardUpgrades[attribute + "_2"];
                    }
                }
            }
        }
    }

    return data;
}