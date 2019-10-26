var app = new function () {

  this.element = document.getElementById('countries');

  this.countries = ['Norway',
                    'Sweden',
                    'Denmark',
                    'Scotland',
                    'Ireland',
                    'England',
                    'Iceland',
                    'Germany',]

  this.Count = function (data) {
    let element = document.getElementById('counter');
    let name = 'country';
    let titleElement = document.getElementById('nameList');
    let title = 'Name';

    if (data) {
      if (data > 1) {
        name = 'countries';
        title = 'Country Name';
      }
      element.innerHTML = data + ' ' + name;
      titleElement.innerHTML = title;
    } else {
      element.innerHTML = 'No ' + name;
      // Use prepend() to change nameList if no data present
      let parent = document.getElementById('nameList');
      parent.append(" of Countries");
      parent.prepend("Unable to List the ");
    }
  };

  this.FetchAll = function () {
    this.countries.sort();
    let data = '';

    if (this.countries.length > 0) {
      for (iterator = 0; iterator < this.countries.length; iterator++) {
        data += '<div class="countryRow">';
        data += '<div class="countryName">' + this.countries[iterator] + '</div>';
        data += '<input type="button" class="editBtn" value="Edit" onclick="app.Edit(' + iterator + ')"></input>';
        data += '<input type="button" class="deleteBtn" value="Delete" onclick="app.Delete(' + iterator + ')"></input>';
        data += '</div>';
      }
    }

    this.Count(this.countries.length);
    return this.element.innerHTML = data;
  };

  this.Add = function () {
    element = document.getElementById('add-name');
    // Get the value
    let country = element.value;

    if (country && !this.countries.includes(country)) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      element.value = '';
      // Display the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    let element = document.getElementById('edit-name');
    // Display value in the field
    element.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function () {
      // Get value
      let country = element.value;

      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
