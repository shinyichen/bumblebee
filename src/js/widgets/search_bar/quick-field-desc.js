/**
 * Quickfield descriptions for showing tooltips with next to the quick field options
 *
 * Each property in this file should match the `value` attribute
 * in the template file (../templates/option-dropdown.html)
 * for each item
 */

define({
  abs: {
    title: 'abstract',
    description: 'Search for word or phrase in abstract, title and keywords',
    syntax: ['abs:"phrase"'],
    example: ['abs:"dark energy"'],
  },
  abstract: {
    title: 'abstract only',
    description: 'Search for a word or phrase in an abstract only',
    syntax: ['abstract:"phrase"'],
    example: ['abstract:"dark energy"'],
  },
  ack: {
    title: 'acknowledgements',
    description:
      'Search for a word or phrase in the acknowledgements extracted from fulltexts.',
    syntax: ['ack:"phrase"'],
    example: ['ack:"ADS"'],
  },
  aff: {
    title: 'affiliation',
    description:
      'Search for word or phrase in the raw, provided affiliation field',
    syntax: ['aff:"phrase"'],
    example: ['aff:"harvard"'],
  },
  aff_canonical: {
    title: 'affiliation canonical',
    description: 'Search by curated institution names',
    syntax: ['aff_canonical:"phrase"'],
    example: ['aff_canonical:California'],
  },
  aff_id: {
    title: 'affiliation id',
    description: 'Search by curated affiliation IDs',
    syntax: ['aff_id:ID'],
    example: ['add_id:A00211'],
  },
  affil: {
    title: 'affil',
    description:
      'Virtual field searching across aff_abbrev, aff_canonical, aff_id, institution, aff',
    syntax: ['affil:"phrase"'],
    example: ['aff:observatory'],
  },
  alternate_bibcode: {
    title: 'alternate bibcode',
    description: 'Search in alternate bibcodes',
    syntax: ['alternate_bibcode:adsbib'],
    example: ['alternate_bibcode:2003AJ….125..525J'],
  },
  alternate_title: {
    title: 'alternate title',
    description:
      'Search by alternate title, usually when the original title is not in English',
    syntax: ['alternate_title:"phrase"'],
    example: ['alternate_title:"Gammablitz"'],
  },
  arxiv_class: {
    title: 'arXiv category',
    description: 'Finds all arXiv pre-prints in the class specified',
    syntax: ['arxiv_class:arxivclass'],
    example: ['arxiv_class:"High Energy Physics - Experiment"'],
  },
  author: {
    title: 'author',
    description:
      'Author name may include just lastname and initial, or stricter author search (recommended)',
    syntax: ['author:"Last, F"', 'author:"Last, First […]"'],
    example: ['author:"huchra, john p"', 'author:"huchra, john p"'],
  },
  author_count: {
    title: 'author count',
    description:
      'Find records that have a specific number of authors, or a range of author counts',
    syntax: ['author_count:count', 'author_count:[min_count TO max_count]'],
    example: ['author_count:40', 'author_count:[10 TO 100]'],
  },
  author_norm: {
    title: 'author norm',
    description: 'Search by authors with their first names shortened',
    syntax: ['author_norm:"Last, F"'],
    example: ['author_norm:"huchra, j"'],
  },
  bibcode: {
    title: 'bibcode',
    description:
      'Find a specific record using the ADS bibcode (ADS identifier of a paper)',
    syntax: ['bibcode:adsbib'],
    example: ['bibcode:2003AJ….125..525J'],
  },
  bibgroup: {
    title: 'bibliographic group',
    description: 'Limit search to papers in HST bibliography',
    syntax: ['bibgroup:name'],
    example: ['bibgroup:HST'],
  },
  bibstem: {
    title: 'bib abbrev',
    description:
      'Find records that contain a specific bibstem in their bibcode',
    syntax: ['bibstem:adsbibstem'],
    example: ['bibstem:ApJ'],
  },
  book_author: {
    title: 'book author',
    description: 'For book reviews, the name of the author(s) of the book',
    syntax: ['book_author:"Last, F"', 'book_author:"Last, First"'],
    example: ['book_author:"Moore, P"'],
  },
  body: {
    title: 'body of article',
    description: 'Search for a word or phrase in (only) the full text',
    syntax: ['body:"phrase"'],
    example: ['body:"gravitational waves"'],
  },
  citation_count: {
    title: 'citation count',
    description:
      'Find records that have a specific number of citations, or a range of citation counts',
    syntax: ['citation_count:count', 'citation_count:[min_count TO max_count]'],
    example: ['citation_count:40', 'citation_count:[10 TO 100]'],
  },
  citation_count_norm: {
    title: 'citation count norm',
    description: 'Search by number of citations normalized by author_count',
    syntax: [
      'citation_count_norm:count',
      'citation_count_norm:[min_count TO max_count]',
    ],
    example: ['citation_count_norm:5', 'citation_count_norm:[5 TO 10]'],
  },
  citation_read_boost: {
    title: 'citation read boost',
    description:
      'Float values (between 0 and 1) containing normalized boost factors',
    syntax: [
      'cite_read_boost:decimal',
      'cite_read_boost:[min_value TO max_value]',
    ],
    example: ['cite_read_boost:0.25', 'cite_read_boost:[0.8 TO 0.95]'],
  },
  collection: {
    title: 'collection',
    description: 'Search from the astronomy, physics, or general collection',
    syntax: ['collection:collection'],
    example: ['collection:general'],
  },
  comment: {
    title: 'comment',
    description: 'Search in comment',
    syntax: ['comment:"phrase"'],
    example: ['comment:"catalog"'],
  },
  copyright: {
    title: 'copyright',
    description: 'Search by copyright given by the publishers',
    syntax: ['copyright:copyright'],
    example: ['copyright:2012'],
  },
  data: {
    title: 'data archive',
    description: 'Limit search to papers with data from specified',
    syntax: ['data:archive'],
    example: ['data:NED'],
  },
  database: {
    title: 'database',
    description: 'Database that the paper resides in (astronomy or physics)',
    syntax: ['database:DB'],
    example: ['database:astronomy'],
  },
  date: {
    title: 'date',
    description: 'Same as pubdate, but of time format and used for indexing',
    syntax: ['date:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]'],
    example: ['date:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]'],
  },
  doctype: {
    title: 'doctype',
    description: 'Limit search to records corresponding to data catalogs',
    syntax: ['doctype:type'],
    example: ['doctype:catalog'],
  },
  doi: {
    title: 'doi',
    description: 'finds a specific record using its digital object id',
    syntax: ['doi:DOI'],
    example: ['doi:10.1086/345794'],
  },
  editor: {
    title: 'editor',
    description: 'Typically for books or series, similar rules to book_author',
    syntax: ['editor:"Last, F"', 'editor:"Last, First"'],
    example: ['editor:"ouwehand, l"'],
  },
  eid: {
    title: 'edi',
    description: 'Search by the electronic id of the paper',
    syntax: ['eid:number'],
    example: ['eid:1'],
  },
  entdate: {
    title: 'entdate',
    description:
      'Creation date of ADS record in user-friendly format (YYYY-MM-DD)',
    syntax: ['entdate:YYYY-MM-DD'],
    example: ['entdate:2019-05-20'],
  },
  entry_date: {
    title: 'entry date',
    description:
      'Creation date of ADS record in RFC 3339 (machine-readable) format',
    syntax: ['entry_date:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]'],
    example: ['entry_date:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]'],
  },
  esources: {
    title: 'esources',
    description:
      'Types of electronic sources available for a record: PUB_HTML, ADS_PDF, ADS_SCAN, PUB_PDF, EPRINT_HTML, EPRINT_PDF, AUTHOR_HTML, AUTHOR_PDF',
    syntax: ['esources:"string"'],
    example: ['esources:EPRINT_HTML'],
  },
  'first-author': {
    title: 'first author',
    description: 'Search by first author of the paper',
    syntax: ['author:"^Last, F"'],
    example: ['author:"^huchra, j"'],
  },
  full: {
    title: 'fulltext',
    description:
      'Search for word or phrase in fulltext, acknowledgements, abstract, title and keywords',
    syntax: ['full:"phrase"'],
    example: ['full:"gravitational waves"'],
  },
  grant: {
    title: 'grant',
    description: 'Search by grant ids and grant agencies',
    syntax: ['grant:grant'],
    example: ['grant:NASA'],
  },
  identifier: {
    title: 'identifier',
    description:
      'Find a paper using any of its identifiers, arXiv, bibcode, doi, etc.',
    syntax: ['identifier:bibcode'],
    example: ['identifier:2003AJ….125..525J'],
  },
  indexstamp: {
    title: 'indexstamp',
    description: 'Search by date at which the document was indexed',
    syntax: ['indexstamp:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]'],
    example: ['indexstamp:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]'],
  },
  inst: {
    title: 'institution',
    description: 'Search paper by the affiliations (institutions)',
    syntax: ['inst:"institution"'],
    example: ['inst:"CfA"'],
  },
  isbn: {
    title: 'isbn',
    description: 'Search by ISBN of the publication (applies to books)',
    syntax: ['isbn:number'],
    example: ['isbn:9783662441855'],
  },
  issn: {
    title: 'issn',
    description:
      'Search by ISSN of the publication (applies to journals - ie. periodical publications)',
    syntax: ['issn:number'],
    example: ['issn:0004637x'],
  },
  issue: {
    title: 'issue',
    description:
      'Search by the issue number of the journal that includes the article',
    syntax: ['issue:number'],
    example: ['issue:10	'],
  },
  keyword: {
    title: 'keyword',
    description: 'Search publisher- or author-supplied keywords',
    syntax: ['keyword:"phrase"'],
    example: ['keyword:sun'],
  },
  keyword_norm: {
    title: 'keyword norm',
    description: 'Search by controlled keywords',
    syntax: ['keyword_norm:"phrase"'],
    example: ['keyword_norm:"sun"'],
  },
  keyword_schema: {
    title: 'keyword schema',
    description: 'Schema for each controlled keyword',
    syntax: ['keyword_schema:"phrase"'],
    example: ['keyword_schema:arxiv'],
  },
  lang: {
    title: 'lang',
    description: 'Language of the main title',
    syntax: ['lang:“language”	'],
    example: ['lang:korean'],
  },
  nedid: {
    title: 'nedid',
    description: 'Search by NED ID',
    syntax: ['nedid:"phrase"'],
    example: ['nedid:"Andromeda_I"'],
  },
  nedtype: {
    title: 'nedtype',
    description: 'Keywords used to describe the NED type (e.g. galaxy, star)',
    syntax: ['nedtype:"phrase"'],
    example: ['nedtype:"galaxy"'],
  },
  object: {
    title: 'object',
    description:
      'Search for papers tagged with a specific astronomical object or at or near a set of coordinates',
    syntax: ['object:"object"'],
    example: ['object:Andromeda'],
  },
  orcid: {
    title: 'orcid',
    description:
      'Search for papers that are associated with a specific ORCiD iD',
    syntax: ['orcid:id'],
    example: ['orcid:0000-0000-0000-0000'],
  },
  orcid_other: {
    title: 'orcid other',
    description: 'ORCID claims from users who used the ADS claiming interface',
    syntax: ['orcid_other:id'],
    example: ['orcid_other:0000-0000-0000-0000'],
  },
  orcid_pub: {
    title: 'orcid pub',
    description: 'ORCID IDs supplied by publishers',
    syntax: ['orcid_pub:id'],
    example: ['orcid_pub:0000-0000-0000-0000'],
  },
  orcid_user: {
    title: 'orcid user',
    description:
      'ORCID claims from users who gave ADS consent to expose their public profiles',
    syntax: ['orcid_user:id'],
    example: ['orcid_id:0000-0000-0000-0000'],
  },
  page: {
    title: 'page',
    description: 'Search for papers with a given page number',
    syntax: ['page:number'],
    example: ['page:410'],
  },
  page_count: {
    title: 'page count',
    description:
      'Difference between the first and last page numbers in the page range',
    syntax: ['page_count:number', 'page_count:[min_value TO max_value]'],
    example: ['page_count:5', 'page_count:[5 TO 10]'],
  },
  property: {
    title: 'property',
    description:
      'An array of miscellaneous flags associated with the record. Possible values include: refereed, notrefereed, article, nonarticle, ads_openaccess, eprint_openaccess, pub_openaccess, openaccess, ocrabstract',
    syntax: ['property:type'],
    example: ['property:openaccess'],
  },
  pub: {
    title: 'publication full name',
    description: 'Limit search to a specific publication',
    syntax: ['bibstem:adsbibstem'],
    example: ['bibstem:ApJ'],
  },
  pub_raw: {
    title: 'pub raw',
    description: 'Name of publisher',
    syntax: ['pub_raw:"phrase"'],
    example: ['pub_raw:"Monthly Notices"'],
  },
  pubdate: {
    title: 'date published',
    description: 'Use fine-grained dates for publication range',
    syntax: ['pubdate:[YYYY-MM TO YYYY-MM]'],
    example: ['pubdate:[2005-10 TO 2006-09]'],
  },
  read_count: {
    title: 'read count',
    description:
      'Number of times the record has been viewed within in a 90-day windows (ads and arxiv)',
    syntax: ['read_count:count'],
    example: ['read_count:10'],
  },
  series: {
    title: 'series',
    description: 'Information about conference series',
    syntax: ['series:"phrase"'],
    example: ['series:"astronomical"'],
  },
  title: {
    title: 'title',
    description: 'Search for word or phrase in title field',
    syntax: ['title:"phrase"'],
    example: ['title:"weak lensing"'],
  },
  update_timestamp: {
    title: 'update timestamp',
    description:
      'Machine readable modification timestamp; corresponds to time when the record was reindexed',
    syntax: [
      'update_timestamp:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]',
    ],
    example: [
      'update_timestamp:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]',
    ],
  },
  vizier: {
    title: 'vizier',
    description: 'Keywords, "subject" tags from VizieR',
    syntax: ['vizier:"phrase"'],
    example: ['vizier:"Optical"'],
  },
  volume: {
    title: 'volume',
    description: 'Search for papers with a given volume',
    syntax: ['volume:volume'],
    example: ['volume:10'],
  },
  year: {
    title: 'year',
    description: 'Year of publication',
    syntax: ['year:YYYY', 'year:YYYY-YYYY'],
    example: ['year:2000', 'year:2000-2005'],
  },
  citations: {
    title: 'citations()',
    description:
      'Returns list of citations from given papers; use [citations] to get the field contents',
    syntax: ['citations(query)'],
    example: ['citations(author:"huchra, john")'],
  },
  pos: {
    title: 'pos()',
    description:
      'Search for an item within a field by specifying the position in the field. The example for this operator is pos(fieldedquery,position,[endposition]). If no endposition is given, then it is assumed to be endposition = position, otherwise this performs a query within the range [position, endposition].',
    syntax: ['pos(fieldedquery,position,[endposition])'],
    example: ['pos(author:"Oort, J",2)'],
  },
  references: {
    title: 'references()',
    description: 'Returns list of references from given papers',
    syntax: ['references(query)'],
    example: ['references(bibcode:2003AJ....125..525J)'],
  },
  reviews: {
    title: 'reviews()',
    description:
      'Returns the list of documents citing the most relevant papers on the topic being researched; these are papers containing the most extensive reviews of the field.',
    syntax: ['reviews(query)'],
    example: ['reviews("weak lensing")'],
  },
  similar: {
    title: 'similar()',
    description:
      'Return similar documents, based on the similarity of the abstract text',
    syntax: ['similar(query)'],
    example: ['similar(bibcode:2000A&AS..143...41K)'],
  },
  topn: {
    title: 'topn()',
    description: 'Return the top N number of documents',
    syntax: ['topn(N, query)'],
    example: ['topn(100, database:astronomy, citation_count desc)'],
  },
  trending: {
    title: 'trending()',
    description:
      'Returns the list of documents most read by users who read recent papers on the topic being researched; these are papers currently being read by people interested in this field.',
    syntax: ['trending(query)'],
    example: ['trending(exoplanets)'],
  },
  useful: {
    title: 'useful()',
    description:
      'Returns the list of documents frequently cited by the most relevant papers on the topic being researched; these are studies which discuss methods and techniques useful to conduct research in this field.',
    syntax: ['useful(query)'],
    example: ['useful("galaxy surveys")'],
  },
  '?': {
    title: 'single wildcard: ?',
    description: 'Matches a single character',
    syntax: ['?'],
    example: ['title:(k? star)'],
  },
  '*': {
    title: 'wildcard: *',
    description: 'Matches zero or more sequential characters',
    syntax: ['*'],
    example: ['title:(gravit* wave)'],
  },
  '=': {
    title: 'exact match: =',
    description: 'Exact match',
    syntax: ['=query'],
    example: ['=author:"murray, stephen"'],
  },
  fulltext_mtime: {
    title: 'fulltext mtime',
    description:
      'Machine readable modification timestamp; corresponds to time when a fulltext was updated',
    syntax: [
      'fulltext_mtime:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]',
    ],
    example: [
      'fulltext_mtime:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]',
    ],
  },
  metadata_mtime: {
    title: 'metadata mtime',
    description:
      'Machine readable modification timestamp; corresponds to time when bibliographic metadata was updated',
    syntax: [
      'metadata_mtime:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]',
    ],
    example: [
      'metadata_mtime:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]',
    ],
  },
  metrics_mtime: {
    title: 'metrics mtime',
    description:
      'Machine readable modification timestamp; corresponds to time when citations metrics were updated',
    syntax: [
      'metrics_mtime:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]',
    ],
    example: [
      'metrics_mtime:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]',
    ],
  },
  nonbib_mtime: {
    title: 'nonbib mtime',
    description:
      'Machine readable modification timestamp; corresponds to time when non-bibliographic metadata was updated',
    syntax: ['nonbib_mtime:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]'],
    example: [
      'nonbib_mtime:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]',
    ],
  },
  orcid_mtime: {
    title: 'orcid mtime',
    description:
      'Machine readable modification timestamp; corresponds to time when data were fetched from ORCiD',
    syntax: ['orcid_mtime:["YYYY-MM-DDTHH:MM:SSZ" TO "YYYY-MM-DDTHH:MM:SSZ"]'],
    example: ['orcid_mtime:["2021-01-01T00:00:00Z" TO "2021-02-01T00:00:00Z"]'],
  },
});
