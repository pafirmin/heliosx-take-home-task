# HeliosX Take-Home Task
Implementation of a multi-step prescription consultation.

## Running the app
1. `git clone git@github.com:pafirmin/heliosx-take-home-task.git`
2. `cd heliosx-take-home-task`
3. `npm i`
4. `npm run dev`
5. Browse to `localhost:5173`

## Notes
- I decided to implement the multi-step form by representing the questionnaire as an array of JS objects.
This has the advantage of making it very easy to modify and extend existing consultations, as well as
create new ones. Additionally, as the data structure is fully serialisable, questionnaires have the 
potential to be stored in JSON files or an external data store and retrieved for displaying on the
front-end. The disadvantage is that individual steps cannot be so easily customised (e.g. if a text
field is needed). This could be implemented fairly easily at first, but before you know it you could
be building a whole survey library (perhaps that's not such a bad thing depending on the number of
questionnaires)!
- The Stepper component could benefit from taking an optional 'wrapper' prop of type ReactElement that
would wrap the active child. This would allow things like the 'back' button and question counter to
be moved out of the ConsultationQuestion component.
- Zod validation was implemented in a bit of a hurry. A more robust implementation might look something
like `previousDiagnosis: z.union([z.literal('positive diagnosis'), ...])`

