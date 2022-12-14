export const locationTemplate = ` 
        {{#items}}
            <option id={{id}} value="{{locationName}}"></option>
    {{/items}}`;

export const cabCategorytemplate = `
        {{#items}}        
        <div class = "cab-content">
            <div class="select">
                <input type="radio" id="choice{{id}}" name="cabCategory" value="{{id}}">
            </div>

            <label for="choice{{id}}">
            <div class = "data">
                <div class="info">
                    <p class="text">Type</p>
                    <p class="text">Base Fare</p>
                    <p class="text">Exra Fare</p>
                    <p class="text">Peak Hour</p>
                </div>
                <div class="value">
                    <p>{{cabType}}</p>
                    <p>{{initialFare}}</p>
                    <p>{{extraFarePerHour}}</p>
                    <p>{{peakHourFare}}</p>
                </div>
            </div></label>


            
        </div>
        {{/items}}`;
