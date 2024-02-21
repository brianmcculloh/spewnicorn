import buildDescription from './build_description.js';

export default function buildSlotsDescription(card) {
    let desc = '';
    let frostDesc = buildDescription(card, 'frost');
    let flameDesc = buildDescription(card, 'flame');
    let frost2Desc = buildDescription(card, 'frost_2');
    let flame2Desc = buildDescription(card, 'flame_2');
    let bothDesc = buildDescription(card, 'both');
    if(frostDesc == flameDesc) {
        desc += frostDesc != '' ? '<div><span class="either">Shard</span>: ' + frostDesc : '</div>';
    } else {
        desc += frostDesc != '' ? '<div><span class="frost">Frost Shard</span>: ' + frostDesc : '</div>';
        desc += flameDesc != '' ? '<div><span class="flame">Flame Shard</span>: ' + flameDesc : '</div>';
    }
    if(card.slots > 1) {
        if(bothDesc == flame2Desc || bothDesc == frost2Desc) {
            //desc += bothDesc != '' ? '<div><span class="frost">Frost Shard</span> + <span class="flame">Flame Shard</span>: ' + bothDesc : '</div>';
            desc += bothDesc != '' ? '<div><span class="either">Double Shard</span>: ' + bothDesc : '</div>';
        }
        if(bothDesc != frost2Desc) {
            desc += frost2Desc != '' ? '<div><span class="frost">Double Frost Shard</span>: ' + frost2Desc : '</div>';
        }
        if(bothDesc != flame2Desc) {
            desc += flame2Desc != '' ? '<div><span class="flame">Double Flame Shard</span>: ' + flame2Desc : '</div>';
        }
    }
    return desc;
}