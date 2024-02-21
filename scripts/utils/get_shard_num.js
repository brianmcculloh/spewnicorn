export default function getShardNum (card, shard) {
    let num = 0;
    if (shard == "any") {
        num = card.shards.length;
    } else {
        num = card.shards.filter((i) => i === shard).length;
    }
    return num;
}