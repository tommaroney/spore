let newMushroom = {
        latinName: $("#latinName").val(),
        commonName: $("#commonName").val(),
        pronunciation: $("#pronunciation").val(),
        content: $("#content").val(),
        mushroom_photo: $("#mushroom_photo").val(),
}






<h1>database model info</h1>
        <div class="model_info">
            <p><label>
                <input id="latinName" type="string" class="validate">
                <label for="latinName">latinName: DataTypes.STRING</label>

            </label></p>
            <p><label>
                <input id="commonName" type="string" class="validate">
                <label for="commonName">commonName: DataTypes.STRING</label>
            </label></p>
            <p><label>
                <input id="pronunciation" type="string" class="validate">
                <label for="pronunciation">pronunciation: DataTypes.STRING</label>
            </label></p>
            <p><label>
                <input id="content" type="text" class="validate" placeholder="descriptive paragraph">
                <label for="content">content: DataTypes.TEXT</label>
            </label></p>
            <p><label>
                <input id="mushroom_photo" type="string" class="validate">
                <label for="mushroom_photo">mushroom_photo: DataTypes.STRING</label>
            </label></p>
            <p><label>
                <input id="thumbnail_photo" type="string" class="validate">
                <label for="thumbnail_photo">thumbnail_photo: DataTypes.STRING</label>
            </label></p>
            <p><label>
                <input id="dateFound" type="string" class="validate">
                <label for="dateFound">dateFound: DataTypes.STRING</label>
            </label></p>
            <p><label>
                <input id="gpsCoordinates" type="string" class="validate">
                <label for="gpsCoordinates">gpsCoordinates: DataTypes.STRING</label>
            </label></p>
        </div> <!-- database info -->

        <!-- icons -->
        <h1>icons</h1>
        <div class="icon_boxes">
            <p><label>
                <input type="checkbox" id="bacon" />
                <span>delicious</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="carrot" />
                <span>edible as is</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="utensils" />
                <span>edible with preparation</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="tp" />
                <span>causes gastrointestinal problems</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="caution" />
                <span>caution, can cause serious illness</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="danger" />
                <span>danger, can cause serious illness or death</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="unknown"  />
                <span>unknown</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="bottle" />
                <span>medicinal as is</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="mortar" />
                <span>medicinal with preparation</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="summer" />
                <span>summer months</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="winter" />
                <span>winter months</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="fall" />
                <span>fall months</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="spring" />
                <span>spring months</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="tree" />
                <span>prefers coniferous forests</span>
            </label></p>
            <p><label>
                <input type="checkbox" id="branch" />
                <span>prefers deciduous forests</span>
            </label></p>
            <p><label>
                    <input type="checkbox" id="cloud" />
                    <span>prefers moist conditions</span>
            </label></p>
        </div> <!-- quick icons -->

        <h1>attributes</h1>
        <div class="attribute_boxes">
            <!---------------------------------------------------->
            <div class="hymenium_type">
                <h3>hymenium (gill type)</h3>
                <p><label>
                        <input type="checkbox" id="hymenium_gills" />
                        <span>gills (fan like)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="hymenium_false_gills" />
                        <span>false gills (wrinkles or veins)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="hymenium_teeth" />
                        <span>teeth (spines, spikes, etc...)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="hymenium_sponge" />
                        <span>sponge/pores</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="hymenium_na" />
                        <span>not applicable</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="gill_characteristics">
                <h3>gill characteristics</h3>
                <p><label>
                        <input type="checkbox" id="gill_chars_ink" />
                        <span>ink-like (when mature)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_watery" />
                        <span>watery (droplets)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_apart" />
                        <span>noticeably apart (distance between gills)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_lengthwise" />
                        <span>split lengthwise</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_reduced" />
                        <span>reduced (wrinkles or veins)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_forked" />
                        <span>forked (dichotomically)</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_spotted" />
                        <span>surface spotted</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_serrated" />
                        <span>serrated edge</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_chars_close" />
                        <span>noticeably close (distance between gills)</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="gill_attachment">
                <h3>gill attachment</h3>
                <p><label>
                        <input type="checkbox" id="gill_attachment_attached" />
                        <span>attached, not clearly decurrent</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_attachment_free__no_collar" />
                        <span>free without collar</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_attachment_decurrent" />
                        <span>clearly decurrent</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="gill_attachment_free_collar" />
                        <span>free, joined by collar</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="spore_print">
                <h3>spore print</h3>
                <p><label>
                        <input type="checkbox" id="spore_print_brown" />
                        <span>brown</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_black" />
                        <span>black</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_ocher" />
                        <span>ocher</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_burnt_orange" />
                        <span>burnt orange</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_red" />
                        <span>red</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_orange" />
                        <span>orange</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_tan" />
                        <span>tan</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_gray" />
                        <span>gray</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_off_white" />
                        <span>off white</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_white" />
                        <span>white</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_pink" />
                        <span>pink</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_yellow" />
                        <span>yellow</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_purple" />
                        <span>purple</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="spore_print_blue" />
                        <span>blue</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="smell">
                <h3>smell</h3>
                <p><label>
                        <input type="checkbox" id="smell_cedar" />
                        <span>cedar</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_maple" />
                        <span>maple</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_seafood" />
                        <span>seafood</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_fruity" />
                        <span>fruity</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_pungent" />
                        <span>mettalic, pungent</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_earthy" />
                        <span>earthy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_none" />
                        <span>none</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_iodine" />
                        <span>iodine</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_mouldy" />
                        <span>mouldy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_acetylene_gas" />
                        <span>acetylene gas</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_barn_dust" />
                        <span>barn dust</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_bitter_almond" />
                        <span>bitter almond</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_blossoms_obtrusive" />
                        <span>blossoms obtrusive</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_blossoms_pleasant" />
                        <span>blossoms pleasant</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_carbolic" />
                        <span>carbolic</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_carrion" />
                        <span>carrion, feces</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_cocoa" />
                        <span>cocoa</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_epilentin_acid" />
                        <span>epilentin acid</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_flour" />
                        <span>flour</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_garlic" />
                        <span>garlic</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_cucumber" />
                        <span>cucumber</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_musk" />
                        <span>musk</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_raddish" />
                        <span>raddish</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_soap" />
                        <span>soap</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="smell_spicy_ aromatic" />
                        <span>spicy, aromatic</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="stipe_characteristics">
                <h3>stipe characteristics</h3>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_greasy" />
                        <span>greasy, slimy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_guttation" />
                        <span>guttation droplets</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_rough" />
                        <span>rough, scapy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_veil_remains" />
                        <span>veil remains</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_frosted" />
                        <span>frosted</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_flakey" />
                        <span>flakey</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_rooting" />
                        <span>rooting</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_woolly" />
                        <span>woolly</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_bulbous" />
                        <span>bulbous base or clavate</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_eccentric" />
                        <span>eccentric</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_furrows_groves" />
                        <span>furrows, groves</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_velvety" />
                        <span>velvety</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_snake" />
                        <span>snake-like pattern</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="stipe_characteristics_hollow" />
                        <span>hollow</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="annulus_characteristics">
                <h3>annulus characteristics</h3>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_without" />
                        <span>without ring</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_descending" />
                        <span>descending, hanging veil</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_ascending" />
                        <span>ascending, funnel-like</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_creased" />
                        <span>creased lengthwise</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_loose" />
                        <span>loose with age</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_firm" />
                        <span>firm</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="annulus_characteristics_multiple" />
                        <span>multiple</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="pileus_characteristics">
                <h3>pileus characteristics</h3>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_honeycomb" />
                        <span>honeycomb pattern</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_guttation" />
                        <span>guttation droplets</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_funnel_like" />
                        <span>funnel-like indentation</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_velvety" />
                        <span>velvety to toetulose</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_papillae" />
                        <span>papillae in middle of cap</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_concentric" />
                        <span>concentrically zoned</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_saddle" />
                        <span>saddle-shaped or lobbed</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_serrated" />
                        <span>serrated margin</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_fine_grained" />
                        <span>fine-grained surface</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_honeycomb" />
                        <span>honeycomb pattern</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_velum" />
                        <span>velum remains</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_humped" />
                        <span>broadly humped</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_nipple" />
                        <span>nipple-like</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_frosted" />
                        <span>frosted</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_brain" />
                        <span>brain-like</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_shaggy" />
                        <span>shaggy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_scaly" />
                        <span>scaly</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_greasy" />
                        <span>greasy, slimy</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_hygrophanous" />
                        <span>hygrophanous, moist and multicolored</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_ink" />
                        <span>ink-like</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pileus_characteristics_radial_folds" />
                        <span>radial folds</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="flesh_color">
                <h3>flesh color</h3>
                <p><label>
                        <input type="checkbox" id="flesh_color_reds" />
                        <span>reds</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_yellows" />
                        <span>yellows</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_oranges" />
                        <span>oranges</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_browns" />
                        <span>browns</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_blacks" />
                        <span>blacks</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_blues" />
                        <span>blues</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_purples" />
                        <span>purples</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_greens" />
                        <span>greens</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_whites" />
                        <span>whites</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_pinks" />
                        <span>pinks</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_tans" />
                        <span>tans</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="flesh_color_grays" />
                        <span>grays</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="fuid_color">
                <h3>fuid color</h3>
                <p><label>
                        <input type="checkbox" id="fuid_color_white_whitish" />
                        <span>white, whitish</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_reddening" />
                        <span>white, then reddening</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_graying" />
                        <span>white, then graying</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_greening" />
                        <span>white, then gray-greening</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_red" />
                        <span>red</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_black" />
                        <span>black, to gray</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_clear" />
                        <span>colorless, clear</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="fuid_color_yellowing" />
                        <span>white, then yellowing</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="volva_characteristics">
                <h3>volva characteristics</h3>
                <p><label>
                        <input type="checkbox" id="volva_characteristics_wart_wreaths" />
                        <span>wart wreaths</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="volva_characteristics_skin_remains" />
                        <span>skin remains</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="volva_characteristics_torus" />
                        <span>torus</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="volva_characteristics_club_like" />
                        <span>club like</span>
                </label></p>
            </div>
            <!---------------------------------------------------->
            <div class="pore_characteristics">
                <h3>pore characteristics</h3>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_square" />
                        <span>square, rhombic</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_elongated" />
                        <span>elongated</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_fine" />
                        <span>round, very fine</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_labyrinthine" />
                        <span>labyrinthine</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_medium" />
                        <span>round, visible without magnifyin glass</span>
                </label></p>
                <p><label>
                        <input type="checkbox" id="pore_characteristics_watery" />
                        <span>watery</span>
                </label></p>
            </div>
        </div> <!-- attributes -->
    </div> <!-- new mushroom form -->
