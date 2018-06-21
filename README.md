# Abortion Policy API Examples

The Abortion Policy API is available at [api.abortionpolicyapi.com](api.abortionpolicyapi.com).
Detailed documentation may be found on  be found on
[the project website](http://abortionpolicyapi.com). This repository contains some code examples
which make use of the API and aim to assist new developers in doing the same.

## cURL

You can, of course, just query the API with cURL. For example, if you run:

```bash
curl -H 'token: YOUR_API_KEY api.abortionpolicyapi.com/v1/waiting_periods/zips/30313
```

You should see the following (or something similar) in your console:

```bash
{"Georgia":{"waiting_period_hours":24,"counseling_visits":1,"counseling_waived_condition":"In cases of medical emergency."}}
```

## Node.js

To begin, install the packages by changing into the _node_ directory and running `npm install`.

Then, modify the API key declared in each example script:

```javascript
var apiKey = 'YOUR_API_KEY';
```

You can now run each script from the command line:

```
$ node example-alaska-insurance.js
In Alaska, Medicaid covers abortion when it's: medically necessary
(The API data are not currently optimized for grammar.)
``

and

```
$ node example-count-minor-restrictions.js
Number of states that require parental consent: 26
```

## Python

To begin, set up a virtual environment:

```bash
virtualenv .venv
source .ven/bin/activate
pip install -r requirements.txt
```

Then, edit example-viability-limit.py to include your API key:

```python
apikey = 'YOUR_API_KEY'
```

Now, you can run it by typing the following in your console of choice:

```bash
python example-viability-limit.py
```

And you should see the following (or something similar, when the laws change):

```
The states that ban abortion at viability are: Arizona, California, Connecticut, Delaware, District of Columbia, Hawaii, Idaho, Illinois, Maine, Maryland, Michigan, Minnesota, Missouri, Montana, Tennessee, Utah, Washington, Wyoming
```