export type Event = {
    dateEvent: ""
    dateEventLocal: null
    idAPIfootball: ""
    idAwayTeam: ""
    idEvent: ""
    idHomeTeam: ""
    idLeague: ""
    idVenue: ""
    intAwayScore: null
    intHomeScore: null
    intRound: ""
    intScore: null
    intScoreVotes: null
    intSpectators: null
    strAwayTeam: ""
    strAwayTeamBadge: ""
    strBanner: ""
    strCity: null
    strCountry: ""
    strDescriptionEN: null
    strEvent: ""
    strEventAlternate: ""
    strFanart: null
    strFilename: ""
    strGroup: null
    strHomeTeam: ""
    strHomeTeamBadge: ""
    strLeague: ""
    strLeagueBadge: ""
    strLocked: ""
    strMap: null
    strOfficial: ""
    strPoster: ""
    strPostponed: ""
    strResult: null
    strSeason: ""
    strSport: ""
    strSquare: ""
    strStatus: ""
    strThumb: ""
    strTime: ""
    strTimeLocal: null
    strTimestamp: ""
    strTweet1: null
    strTweet2: null
    strTweet3: null
    strVenue: ""
    strVideo: null
}

export type EventResponseApi = {
    idEvento: number;
    equipoLocal: string | null;
    equipoVisitante: string | null;
    fechaPartido: string | null;
}
